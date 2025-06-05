import MainDocsComponent from "@/components/organisms/docs/main"
import HightLightAtoms from '../../components/atoms/highlight';
const data = [
    "🔍 Search Games by title, ID, or platform",
    "💰 Compare Prices across stores and regions",
    "✅ Check Server Status for supported games",
    "🏷️ Filter by Genre, Platform, Region, or Release Date",
    "📈 Get Trending or Recently Released Games"
]
const desc = [
    "Welcome to the Games Checker API — your go-to solution for checking game availability, pricing, server status, and more across multiple platforms.",
    "Whether you're a developer building a gaming companion app, an e-commerce store comparing prices, or just a curious gamer, our API gives you fast, reliable access to up-to-date game information.",
    "This quick guide will help you get started with just a few simple steps."
]

const json = {
    "message": "200 - Data successfully retrieved",
    "status": 200,
    "data": [
        {
            "type": "mobile-legends"
        },
        {
            "type": "..."
        }
    ]
}
const notes = [
    "This API is open to everyone — no signup, no tokens.",
    "Data refreshed regularly",
    "Supports JSON only",
    "Fast & developer-friendly",
]
export default function Docs() {
    return (
        <>
            <MainDocsComponent title='🕹️ Getting Started — Games Checker API'>
                {desc.map((value: string, index: number) => (
                    <p key={`getting-started-desc-${index}`}>{value}</p>
                ))}

            </MainDocsComponent>
            <MainDocsComponent title="⚙️ What You Can Do with the API">
                {data.map((value: string, index: number) => (
                    <li key={`getting-started-can-do-${index}`}>{value}</li>
                ))}
            </MainDocsComponent>
            <MainDocsComponent title='Using the examples'>
                <p>You can use any HTTP client (like a browser, Postman, or fetch) to make requests.</p>
                <HightLightAtoms type="http" title="Example: Get All List Games">
                    <code>GET https://nuv-games-api.vercel.com/api/list-games</code>
                </HightLightAtoms>
                <HightLightAtoms type="json" title="Response :">
                    <pre>{JSON.stringify(json, null, 2)}</pre>
                </HightLightAtoms>
            </MainDocsComponent>
            <MainDocsComponent title="ℹ️ Notes">
                {notes.map((value: string, index: number) => (
                    <li key={`getting-started-notes-${index}`}>{value}</li>
                ))}
            </MainDocsComponent>
        </>
    )
}