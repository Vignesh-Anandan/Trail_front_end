import Usercl from "./Usercl";


const About = () => {
    return(
        <div>
            <h1>About us</h1>
            <Usercl 
                name={"vignesh"} year={"2015"}
                description={"I am a frontend developer"}
            />
        </div>
    )
};

export default About;