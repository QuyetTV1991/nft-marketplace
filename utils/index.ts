export function generateRandomId(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

export function getRandomDescendingNumber(): number {
    const min = 100;
    const max = 200;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Return the descending counterpart
    return 300 - randomNumber; // 300 is chosen as it's greater than the range (200 - 100 + 1)
}