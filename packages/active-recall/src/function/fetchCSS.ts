export async function fetchCSS(url: string, backupUrl: string) {
  try {
    const response = await fetch(url);
    const text = await response.text();
    console.log(`${url} Installed from local`);
    return text;
  } catch (localError) {
    const response = await fetch(backupUrl);
    const text = await response.text();
    console.log(`${url} Installed from CDN`);
    return text;
  }
}
