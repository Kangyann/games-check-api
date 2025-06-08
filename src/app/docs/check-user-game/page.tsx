import MainDocsComponent from '../../../components/organisms/docs/main';
import { title } from 'process';
import HightLightAtom from '../../../components/atoms/highlight';
export default function DocsCheckUserGame() {
    const example = `fetch('https://nuv-games-api.vercel.app/api/check-games?type=mobile-legends', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    userid: '12345678',
    zoneid: '1234'
  })
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error('Error checking user:', err))`
    const json = {
        "status": 200,
        "message": "200 - [MOBILE-LEGENDS] : Data successfully retrieved ",
        "data": {
            "username": "kangyann.",
            "country": "Indonesia"
        }
    }
    return (<>
        <MainDocsComponent title="Endpoint: /api/check-games">
            <p>Checking the validity & match of a user account based on the user ID or server ID (if required by the game server).
                The results obtained can be game users or others related to the details of the game.
                This API can be used for user validation in the use or top-up system apps or game service integration.
            </p>
            <ul className="list-disc ms-6 space-y-3">
                <li>Method : <b className="px-2 bg-[rgb(0,0,0,.075)] rounded py-1">POST</b></li>
                <li>Endpoint : <i className="px-2 bg-[rgb(0,0,0,.075)] rounded py-1">/api/check-games?type={"{game_type}"}</i></li>
                <li><b>No API Key or Authorization required.</b></li>
            </ul>
            <p>Search and get the type of game that can be used here. <a href="http://nuv-games-api.vercel.app/api/list-games" className="text-indigo-500">List Games</a></p>
            <div className="flex items-center gap-1.5">
                <p>Choose game type  :</p>
                <select name="type" id="type" title="type-games" className="cursor-pointer border rounded px-2 py-1 text-xs">
                    <option value="">Mobile Legends</option>
                </select>
            </div>
        </MainDocsComponent>

        <MainDocsComponent title="Example Request | Data Body (JSON)">
            <HightLightAtom type="json" title="Data :">
                <pre>{JSON.stringify({
                    "userId": "123456789",
                    "zoneId": "0000"
                }, null, 2)}</pre>
            </HightLightAtom>
            <div className="overflow-x-auto max-w-full">
                <table className="table-auto border-collapse border border-gray-100 w-full text-sm">
                    <caption className="caption-bottom my-1.5 text-xs">Data is needed for server requirements.</caption>
                    <thead>
                        <tr>
                            <th className="px-3 py-1.5 text-nowrap border border-gray-100 text-left ">Name</th>
                            <th className="px-3 py-1.5 text-nowrap border border-gray-100 text-left ">Type</th>
                            <th className="px-3 py-1.5 text-nowrap border border-gray-100 text-left ">Required ?</th>
                            <th className="px-3 py-1.5 text-nowrap border border-gray-100 text-left ">Description</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs">
                        <tr>
                            <td className="px-3 py-1.5 border border-gray-100"><i className="bg-[rgb(0,0,0,.075)] p-1 rounded">userid</i></td>
                            <td className="px-3 py-1.5 border border-gray-100">string</td>
                            <td className="px-3 py-1.5 border border-gray-100">Yes</td>
                            <td className="px-3 py-1.5 border border-gray-100">Official ID account in game.</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-1.5 border border-gray-100"><i className="bg-[rgb(0,0,0,.075)] p-1 rounded">zoneid</i></td>
                            <td className="px-3 py-1.5 border border-gray-100">string</td>
                            <td className="px-3 py-1.5 border border-gray-100">Yes</td>
                            <td className="px-3 py-1.5 border border-gray-100">Zone / Region ID.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Example : /api/check-games?type=<span className="text-indigo-500">mobile-legends</span></p>
            <table className="table-auto border-collapse border border-gray-100 w-full text-sm">
                <caption className="caption-bottom my-1.5 text-xs">Type required for use of check user game specifications.</caption>
                <thead>
                    <tr>
                        <th className="px-3 py-1.5 text-nowrap border border-gray-100 text-left ">Name</th>
                        <th className="px-3 py-1.5 text-nowrap border border-gray-100 text-left ">Type</th>
                        <th className="px-3 py-1.5 text-nowrap border border-gray-100 text-left ">Required ?</th>
                        <th className="px-3 py-1.5 text-nowrap border border-gray-100 text-left ">Description</th>
                    </tr>
                </thead>
                <tbody className="text-xs">
                    <tr>
                        <td className="px-3 py-1.5 border border-gray-100"><i className="bg-[rgb(0,0,0,.075)] p-1 rounded">type</i></td>
                        <td className="px-3 py-1.5 border border-gray-100">string</td>
                        <td className="px-3 py-1.5 border border-gray-100">Yes</td>
                        <td className="px-3 py-1.5 border border-gray-100">Type of games ( ex: mobile-legends,free-fire)</td>
                    </tr>
                </tbody>
            </table>
            <HightLightAtom type="javascript" title="Request :">
                <div className="">
                    <pre>{example}</pre>
                </div>
            </HightLightAtom>
        </MainDocsComponent>
        <MainDocsComponent title="Example Response">
            <HightLightAtom type="json" title="Response :">
                <div className="">
                    <pre>{JSON.stringify(json, null, 2)}</pre>
                </div>
            </HightLightAtom>
        </MainDocsComponent>
    </>)
}