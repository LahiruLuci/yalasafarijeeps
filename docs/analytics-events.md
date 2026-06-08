# GA4 Analytics Events Documentation - Yala Safari Jeeps

This document outlines the events tracked via Google Analytics 4 (GA4) for **Yala Safari Jeeps**.

## General Implementation Rules
- **PII Privacy**: No Personally Identifiable Information (PII) is sent to GA4. Names, phone numbers, email addresses, and specific messages are filtered out before sending.
- **Tracking Helper**: All events are triggered via the `trackEvent` function in `lib/analytics.ts`.
- **Data Attributes**: Important elements use `data-event="..."` for QA and GTM compatibility.

---

## Tracked Events

### 1. `whatsapp_click`
- **Trigger**: When a user clicks any WhatsApp link or button.
- **Parameters**:
  - `location`: Where the click happened (e.g., `header`, `footer`, `contact_page`, `booking_page`, `safari_detail`, `final_cta`).
  - `page_path`: The current page URL.
- **GA4 Action**: Recommended to mark as a **Key Event**.

### 2. `phone_click`
- **Trigger**: When a user clicks a `tel:` link.
- **Parameters**:
  - `location`: Component location (e.g., `header`, `contact_page`).
  - `page_path`: Current page URL.

### 3. `email_click`
- **Trigger**: When a user clicks a `mailto:` link.
- **Parameters**:
  - `location`: Component location.

### 4. `booking_form_start`
- **Trigger**: When a user first interacts (focus/type) with any field in the booking form.
- **Parameters**:
  - `page_path`: Current page URL.
- **Details**: Only triggers once per session per user to avoid duplicates.

### 5. `generate_lead`
- **Trigger**: On successful submission of the Booking Form or Contact Form.
- **Parameters**:
  - `lead_type`: `booking` or `contact`.
  - `safari_package`: The selected package (for bookings).
  - `contact_method`: `form` or `whatsapp` (if submitted via WhatsApp redirect).
- **GA4 Action**: **High Priority Key Event**.

### 6. `select_item`
- **Trigger**: When a user clicks on a safari package card or "Learn More" button.
- **Parameters**:
  - `item_list_name`: `safari_packages`.
  - `item_name`: The name of the package (e.g., `Morning Safari`).
  - `item_category`: `safari_package`.

### 7. `book_now_click`
- **Trigger**: When a user clicks a "Book Now" or "Book Safari" button.
- **Parameters**:
  - `location`: Where the button is located (e.g., `hero`, `navbar`, `package_card`).

---

## Recommended Key Events in GA4 Admin
After events appear in the GA4 dashboard, the administrator should toggle "Mark as key event" for:
1. `generate_lead`
2. `whatsapp_click`
3. `booking_form_start` (to measure funnel drop-off)
4. `phone_click`
