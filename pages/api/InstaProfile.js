export async function InstaProfile() {
    const response = await fetch(`https://www.instagram.com/aminriqky/?__a=1`)
    const jsonData = await response.json()
    return jsonData
}

export default function handler( req, res) {
    res.status(200).json('Status OK')
}