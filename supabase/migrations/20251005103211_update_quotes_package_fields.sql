/*
  # Update quotes table for package type and quantity

  ## Purpose
  Restructure cargo details to use package type selection before entering quantities and dimensions.
  Add LDM cargo type option.

  ## Changes
  
  ### `quotes` table updates
  - Add `package_type` (text, nullable) - Type of package (pallets, boxes, bulk, container, other)
  - Add `quantity` (integer, nullable) - Number of items/packages
  - Drop old `pallets` and `boxes` columns (replaced by package_type and quantity)
  - Update cargo_type constraint to include 'ldm'
  
  ## Notes
  
  - package_type and quantity are optional fields (for cargo details toggle section)
  - Old pallets/boxes fields are replaced with the more flexible package_type + quantity approach
  - LDM (Loading Meter) is now a valid cargo type option
*/

-- Update the cargo_type check constraint to include 'ldm'
ALTER TABLE quotes DROP CONSTRAINT IF EXISTS quotes_cargo_type_check;
ALTER TABLE quotes ADD CONSTRAINT quotes_cargo_type_check 
  CHECK (cargo_type IN ('dry', 'controlled', 'adr', 'special', 'ldm', 'other'));

-- Add package_type column
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'quotes' AND column_name = 'package_type'
  ) THEN
    ALTER TABLE quotes ADD COLUMN package_type text;
  END IF;
END $$;

-- Add quantity column (replaces separate pallets/boxes)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'quotes' AND column_name = 'quantity'
  ) THEN
    ALTER TABLE quotes ADD COLUMN quantity integer CHECK (quantity >= 0);
  END IF;
END $$;

-- Drop old pallets and boxes columns if they exist
-- These are replaced by package_type + quantity
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'quotes' AND column_name = 'pallets'
  ) THEN
    ALTER TABLE quotes DROP COLUMN pallets;
  END IF;
  
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'quotes' AND column_name = 'boxes'
  ) THEN
    ALTER TABLE quotes DROP COLUMN boxes;
  END IF;
END $$;