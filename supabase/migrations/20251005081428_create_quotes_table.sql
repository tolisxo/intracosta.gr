/*
  # Create quotes table for storing transport quote requests

  ## Purpose
  Store all quote requests submitted through the website form for backup,
  tracking, and administrative review.

  ## New Tables
  
  ### `quotes`
  - `id` (uuid, primary key) - Unique identifier for each quote
  - `pickup_country` (text) - Country of pickup location
  - `pickup_city` (text) - City of pickup location
  - `pickup_postal_code` (text) - Postal code of pickup location
  - `pickup_company` (text, nullable) - Company name at pickup location
  - `delivery_country` (text) - Country of delivery location
  - `delivery_city` (text) - City of delivery location
  - `delivery_postal_code` (text) - Postal code of delivery location
  - `delivery_company` (text, nullable) - Company name at delivery location
  - `loading_date` (date) - Requested loading/pickup date
  - `cargo_type` (text) - Type of cargo (dry, controlled, adr, special)
  - `pallets` (integer, nullable) - Number of pallets
  - `boxes` (integer, nullable) - Number of boxes
  - `length` (decimal, nullable) - Length in meters
  - `width` (decimal, nullable) - Width in meters
  - `height` (decimal, nullable) - Height in meters
  - `weight` (decimal) - Weight in kilograms
  - `company_name` (text) - Customer's company name
  - `contact_person` (text) - Name of contact person
  - `email` (text) - Customer email address
  - `phone` (text) - Customer phone number
  - `created_at` (timestamptz) - Timestamp when quote was submitted
  - `email_sent` (boolean) - Whether notification email was sent successfully
  - `email_sent_at` (timestamptz, nullable) - When email notification was sent
  
  ## Security
  
  - Enable Row Level Security (RLS) on quotes table
  - Add policy for service role to insert quotes (for form submissions)
  - No public read access - quotes are for internal use only

  ## Notes
  
  - All quote submissions are stored for tracking and follow-up
  - Email notifications are sent separately but tracked in this table
  - No user authentication required for submission (public form)
  - Admin access will be managed through service role
*/

-- Create quotes table
CREATE TABLE IF NOT EXISTS quotes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  pickup_country text NOT NULL,
  pickup_city text NOT NULL,
  pickup_postal_code text NOT NULL,
  pickup_company text,
  delivery_country text NOT NULL,
  delivery_city text NOT NULL,
  delivery_postal_code text NOT NULL,
  delivery_company text,
  loading_date date NOT NULL,
  cargo_type text NOT NULL CHECK (cargo_type IN ('dry', 'controlled', 'adr', 'special')),
  pallets integer CHECK (pallets >= 0),
  boxes integer CHECK (boxes >= 0),
  length decimal(10, 2) CHECK (length > 0),
  width decimal(10, 2) CHECK (width > 0),
  height decimal(10, 2) CHECK (height > 0),
  weight decimal(10, 2) NOT NULL CHECK (weight > 0),
  company_name text NOT NULL,
  contact_person text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  email_sent boolean DEFAULT false NOT NULL,
  email_sent_at timestamptz
);

-- Enable Row Level Security
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;

-- Policy: Allow insert for anonymous users (public form submission)
-- This allows the form to submit quotes without authentication
CREATE POLICY "Allow public quote submissions"
  ON quotes
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Service role can do everything (for admin/backend operations)
CREATE POLICY "Service role has full access"
  ON quotes
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Create index on created_at for efficient sorting and querying
CREATE INDEX IF NOT EXISTS quotes_created_at_idx ON quotes(created_at DESC);

-- Create index on email for customer lookup
CREATE INDEX IF NOT EXISTS quotes_email_idx ON quotes(email);