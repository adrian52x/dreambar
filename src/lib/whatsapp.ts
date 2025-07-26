/**
 * WhatsApp utility functions for opening WhatsApp on different devices
 */

interface WhatsAppConfig {
  phoneNumber: string;
  message?: string;
}

/**
 * Detects if the current device is mobile
 */
export const isMobileDevice = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

/**
 * Opens WhatsApp with the specified phone number and message
 * Automatically detects device type and uses appropriate method
 */
export const openWhatsApp = ({ phoneNumber, message = "" }: WhatsAppConfig): void => {
  const encodedMessage = encodeURIComponent(message);
  
  if (isMobileDevice()) {
    // For mobile devices, use the WhatsApp app link
    window.open(`whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`, '_blank');
  } else {
    // For desktop/web, use WhatsApp Web
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  }
};

/**
 * Default WhatsApp configuration for DREAMBAR
 */
export const dreambarWhatsAppConfig: WhatsAppConfig = {
  phoneNumber: "4581949992",
  message: "Salut! Sunt interesat de serviciile DREAMBAR."
};

/**
 * Quick function to open DREAMBAR WhatsApp with default configuration
 */
export const openDreambarWhatsApp = (): void => {
  openWhatsApp(dreambarWhatsAppConfig);
};
