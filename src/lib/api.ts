
/**
 * @function ApiFetch
 * @constant
 * @param {Record<string,any>}
 * @returns {Promise<Record<string,any>>}
 */

export async function ApiFetch({ data }: { data: Record<string, any> }): Promise<Record<string, any>> {

    try {
        const get = await fetch('https://order-sg.codashop.com/initPayment.action', {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: data ? JSON.stringify(data) : null,
            cache: "no-cache"
        })
        return await get.json()

    } catch (error) {
        return {
            "status": 500,
            "message": "Internal Server Error."
        }
    }
}