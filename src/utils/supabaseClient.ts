import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface QuoteFormData {
  pickupCountry: string;
  pickupCity: string;
  pickupPostalCode: string;
  pickupCompany?: string;
  deliveryCountry: string;
  deliveryCity: string;
  deliveryPostalCode: string;
  deliveryCompany?: string;
  loadingDate: string;
  cargoType: string;
  pallets?: number;
  boxes?: number;
  length?: number;
  width?: number;
  height?: number;
  weight: number;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
}

export async function saveQuoteToDatabase(formData: QuoteFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase.from('quotes').insert([
      {
        pickup_country: formData.pickupCountry,
        pickup_city: formData.pickupCity,
        pickup_postal_code: formData.pickupPostalCode,
        pickup_company: formData.pickupCompany || null,
        delivery_country: formData.deliveryCountry,
        delivery_city: formData.deliveryCity,
        delivery_postal_code: formData.deliveryPostalCode,
        delivery_company: formData.deliveryCompany || null,
        loading_date: formData.loadingDate,
        cargo_type: formData.cargoType,
        pallets: formData.pallets ? parseInt(String(formData.pallets)) : null,
        boxes: formData.boxes ? parseInt(String(formData.boxes)) : null,
        length: formData.length ? parseFloat(String(formData.length)) : null,
        width: formData.width ? parseFloat(String(formData.width)) : null,
        height: formData.height ? parseFloat(String(formData.height)) : null,
        weight: parseFloat(String(formData.weight)),
        company_name: formData.companyName,
        contact_person: formData.contactPerson,
        email: formData.email,
        phone: formData.phone,
        email_sent: false,
      },
    ]);

    if (error) {
      console.error('Database error:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error('Failed to save quote:', err);
    return { success: false, error: 'Failed to save quote to database' };
  }
}
