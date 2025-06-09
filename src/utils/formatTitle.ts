export function formatTitle({ text }: { text: string }): string {
    return text
        .split('-') // pisah berdasarkan "-"
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // kapitalisasi
        .join(' ') // gabung dengan spasi
}