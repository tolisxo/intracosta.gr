/*
  # Add cargo_type_other field to quotes table

  ## Purpose
  Allow users to specify a custom cargo type when they select "other" option.

  ## Changes
  
  ### `quotes` table updates
  - Add `cargo_type_other` (text, nullable) - Custom cargo type description when cargo_type is 'other'
  
  ## Notes
  
  - This field is only required when cargo_type = 'other'
  - Allows users to specify custom cargo types like "Liquid bulk", "Vehicles", etc.
*/

-- Add cargo_type_other column
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'quotes' AND column_name = 'cargo_type_other'
  ) THEN
    ALTER TABLE quotes ADD COLUMN cargo_type_other text;
  END IF;
END $$;

-- Update the cargo_type check constraint to include 'other'
ALTER TABLE quotes DROP CONSTRAINT IF EXISTS quotes_cargo_type_check;
ALTER TABLE quotes ADD CONSTRAINT quotes_cargo_type_check 
  CHECK (cargo_type IN ('dry', 'controlled', 'adr', 'special', 'other'));