import {Box, Grid, Button} from '@mui/material';
import "./cines4D.css";
import react from "react";
import {useState} from "react";

const cines={
        avellaneda:{
            name:"Cinépolis Avellaneda",
            url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620804.7926629672!2d-58.78857216637837!3d-34.60175436715176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca4731f74cff%3A0xdffdd4bcf49d6a86!2sCin%C3%A9polis%20Avellaneda!5e0!3m2!1ses-419!2sar!4v1653420943117!5m2!1ses-419!2sar"
        },
        merlo:{
            name:"",
            url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620879.6604314651!2d-59.22461624510293!3d-34.59173749829965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbf8884b8fa4f%3A0xe63daf2637b31dad!2sCin%C3%A9polis%20Merlo!5e0!3m2!1ses-419!2sar!4v1653421065530!5m2!1ses-419!2sar"
        },
        recoleta:{
            name:"",
            url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620879.6604314651!2d-59.22461624510293!3d-34.59173749829965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaa28fffbeeb%3A0x1db9af96c3aab6b0!2sCinepolis%20Recoleta!5e0!3m2!1ses-419!2sar!4v1653424616226!5m2!1ses-419!2sar"
        },
        pilar:{
            name:"",
            url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890954.2495254405!2d-59.5288735301645!3d-34.57996601237201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9c542b841807%3A0xe8b64cb6d59463c6!2sCin%C3%A9polis%20Pilar!5e0!3m2!1ses-419!2sar!4v1653424652929!5m2!1ses-419!2sar"
        },
        lujan:{
            name:"",
            url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1523373.9856874761!2d-59.97077767370633!3d-35.00311883834822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc7d741d9ca29b%3A0xfdccaddee96b263f!2zQ2luw6lwb2xpcyBMdWrDoW4!5e0!3m2!1ses-419!2sar!4v1653424721588!5m2!1ses-419!2sar"
        }
    }




export default function Ubicaciones() {
    const [ubi,setUbi]=useState(cines.avellaneda.url)
    return (
        <Box className='caja'>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                <iframe src={ubi} widht="100%" height="100%" border="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='mapa'></iframe>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={()=>setUbi(cines.avellaneda.url) }>Cinépolis Avellaneda</Button>
                    <Button onClick={()=>setUbi(cines.merlo.url) }>Cinépolis Merlo</Button>
                    <Button onClick={()=>setUbi(cines.recoleta.url) }>Cinepolis Recoleta</Button>
                    <Button onClick={()=>setUbi(cines.pilar.url) }>Cinépolis Pilar</Button>
                    <Button onClick={()=>setUbi(cines.lujan.url) }>Cinépolis Luján</Button>
                </Grid>
            </Grid>
        </Box>
    )
}