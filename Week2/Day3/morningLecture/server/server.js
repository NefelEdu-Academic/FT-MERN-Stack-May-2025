//in order to use express
// the keyword 'import' =>  after the add of "type": "module"  in package.json (an ES6 syntax)
import express from "express";
const app = express();
const port = 8000;
//! make sure these lines are above any app.get or app.post code blocks
app.use( express.json() ); //middleware


const languages =[
    {id:1, stackName: "JavaScript", nbOfWeeks: 3, difficulty: "Medium" },
    {id:2, stackName: "Python", nbOfWeeks: 5, difficulty:  "Easy"},
    {id:3, stackName: "Java", nbOfWeeks: 3, difficulty:  "Easy"},
    {id:4, stackName: "C", nbOfWeeks: 4, difficulty:  "Hard"},
]

// create a route to get all languages
// req is shorthand for request
// res is shorthand for response
app.get("/api/all-languages", (req, res)=>{
    res.json(languages)
})

// create a route to add a new language
app.post("/api/new-language", (req, res)=>{
    const lang = req.body
    languages.push(lang)
    res.json(languages)
})

// create a route to find a language with its id
app.get("/api/language/:id", (req, res)=>{
    const languageId = req.params.id
    const lang = languages.find((l)=>l.id == languageId)
    res.json(lang)
})

// create a route to update a specific language data
app.put("/api/update/:id", (req, res)=>{
    languages.forEach((lang, idx)=>{
        if(lang.id == req.params.id){
            lang = {...lang, ...req.body}
            languages[idx] = lang
        }

    })
    const updatedLang = languages.find((l)=> l.id == req.params.id)
    res.json(updatedLang)
})

// create a route to delete a language by id
app.delete("/api/delete/:id", (req, res)=>{
    const languageId = req.params.id
    const index = languages.findIndex((oneLanguage)=> oneLanguage.id == languageId)
    languages.splice(index, 1)
    res.json(languages)
})

//! this needs to be below the other code blocks
app.listen( port, () => console.log(`Server running on port: ${port}`) );
