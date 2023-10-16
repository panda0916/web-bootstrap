axios.get("https://swapi.dev/api/people/1")
.then(res => {
    console.log("RESPONSE:", res)
})
.catch(e => {
    console.log("ERROR! ", e)
})
// ================================================================
const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
        console.log(res.data)
    } catch(e){
        console.log("ERROR", e)
    }
}
getStarWarsPerson(5)
getStarWarsPerson(10)

// ========================HTML===============================
<script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>