/**
 * ZeeMark Google AdSense Configuration
 * 
 * Instructions for adding your real Google AdSense Publisher ID:
 * 1. Once you have an approved Google AdSense account, set `enabled: true`.
 * 2. Replace the placeholder publisherId with your real ID (e.g. "ca-pub-1234567890123456").
 * 3. Replace the placeholder ad slot IDs with your custom created responsive ad units from Google AdSense.
 * 
 * Note: While `enabled` is false, ZeeMark displays clean, professional, non-intrusive
 * placeholder containers labeled "Advertisement" that meet AdSense layout standards
 * without showing fake ads or tricking users.
 */

export interface AdSenseConfigType {
  enabled: boolean;
  publisherId: string;
  testMode: boolean;
  slots: {
    homeLeaderboard: string;
    guideInArticle: string;
    toolsSidebar: string;
    footerBanner: string;
  };
}

export const ADSENSE_CONFIG: AdSenseConfigType = {
  // Set to true once you have been approved by Google AdSense
  enabled: true,
  
  // Replace with your real Publisher ID from Google AdSense (e.g. "ca-pub-1234567890123456")
  publisherId: "ca-pub-6132049882910745",
  
  // Enable Google test mode while testing ads locally or in staging
  testMode: true,
  
  // Real Ad Unit Slots from your AdSense dashboard
  slots: {
    homeLeaderboard: "1234567890",
    guideInArticle: "2345678901",
    toolsSidebar: "3456789012",
    footerBanner: "4567890123",
  },
};
