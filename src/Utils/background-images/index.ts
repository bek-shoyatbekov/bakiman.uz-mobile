const GoogleDriveIds = [
  "1Of6sfn_2yXTTLZ7VT6Ia5Vz4kJHwuUnP",
  "1xs2W-WkNU409fud8PQCmpPs1N17_nrVV",
  "1o0NBaDwsTpGlnaFZo8WgE1wPEiT-FKDe",
  "1iZpxYcIL_FVgiGT6mVbdb0LWtTw5em67",
  "1NLxZYO6d3QzT4A7u2VtkOG5cLfZoHQfb",
  "1iLjGNLaUCWDPrDj5roBDUFR4laYjsr-i",
  "16MoSH3doRml4F9kNxWZ9yw529d3qFgVl",
  "1jI_SBzTy5TnIfFnkkkumjuOCQafLBIj-",
  "1F4WiV3MXMG9atGZfzwd9DeVZBk6UzE8-",
];

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Generate a random background image URL from a list of Google Drive IDs.
 *
 * @return {string} The URL of the random background image.
 */
const getRandomBackgroundImage = () => {
  const randomNumber = getRandomNumber(0, GoogleDriveIds.length - 1);
  return `https://drive.google.com/thumbnail?id=${GoogleDriveIds[randomNumber]}`;
};

export default getRandomBackgroundImage;
