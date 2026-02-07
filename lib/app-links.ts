/**
 * Liens officiels Immo+ (app stores, réseaux sociaux).
 */

export const APP_STORE_URL =
  "https://apps.apple.com/us/app/immoplus-pro/id6755235349"
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.immoplus_pro.ci&pcampaignid=web_share"
export const INSTAGRAM_URL =
  "https://www.instagram.com/immoplus_lapp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
export const FACEBOOK_URL =
  "https://web.facebook.com/profile.php?id=61584464421569"

/**
 * Retourne l’URL du store (Play ou App) selon l’appareil.
 * À utiliser côté client (navigator).
 */
export function getDownloadUrl(): string {
  if (typeof navigator === "undefined") return APP_STORE_URL
  return /Android/i.test(navigator.userAgent) ? PLAY_STORE_URL : APP_STORE_URL
}
