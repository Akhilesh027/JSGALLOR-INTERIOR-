export interface InteriorInquiryPayload {
  name: string;
  phone: string;
  email?: string;
  formType: 'consultation' | 'experience_center_visit' | 'cost_estimator' | 'general_inquiry';
  bhk?: string;
  plotMeasurements?: string;
  budgetEstimation?: string;
  city?: string;
  locality?: string;
  selectedTier?: string;
  selectedRooms?: string[];
  calculatedEstimate?: number;
  notes?: string;
}

const getApiBase = () => {
  if (import.meta.env.VITE_API_URL) return import.meta.env.VITE_API_URL;
  return 'https://api.jsgallor.com';
};

export const submitInteriorInquiry = async (payload: InteriorInquiryPayload): Promise<{ success: boolean; data?: any; error?: string }> => {
  try {
    const primaryBase = getApiBase();
    let res: Response | null = null;

    try {
      res = await fetch(`${primaryBase}/api/interior/inquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (primaryErr) {
      // If local dev server isn't up, fallback to live API
      if (primaryBase !== 'https://api.jsgallor.com') {
        res = await fetch(`https://api.jsgallor.com/api/interior/inquiries`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      } else {
        throw primaryErr;
      }
    }

    if (!res || !res.ok) {
      const errData = await res?.json().catch(() => ({}));
      return {
        success: false,
        error: errData?.message || 'Failed to submit form to server',
      };
    }

    const data = await res.json();
    return {
      success: true,
      data: data.data,
    };
  } catch (err: any) {
    console.error('Interior Inquiry submission error:', err);
    return {
      success: false,
      error: err?.message || 'Network error',
    };
  }
};
