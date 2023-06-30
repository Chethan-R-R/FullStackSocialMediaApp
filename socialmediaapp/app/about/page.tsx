import Image from "next/image"
import Link from "next/link"

function About(){
    return(
        <div className="mainpage">
          <div className='pagetitle'>
            <h1>About</h1>
          </div>
          <div className="maincontent">
            <div className="About">
              
              <div className="techStack">
                <h2 className="stack">Tech Stack</h2>
                <div className="mongodbLogo">
              <Image alt="mongo DB Atlas" src={"/mongodbLogo.png"} width={300} height={125}/>
            </div>
            <div className="nodejsLogo">
              <Image alt="Node Js" src={"/nodejsLogo.png"} width={300} height={125}/>
            </div>
            <div className="nextjsLogo">
              <Image alt="Next Js" src={"/nextjsLogo.png"} width={300} height={125}/>
            </div>
            <div className="typescriptLogo">
              <Image alt="TypeScript" src={"/typescriptLogo.png"} width={300} height={125}/>
            </div>
              </div>
              
            <div className="techStack">
              <h2 className="srccode">Source Code</h2>
              <Link href={"https://github.com/Chethan-R-R/FullStackSocialMediaApp"} className="githubLogo">
              <Image alt="GitHub" src={"/githubLogo.png"} width={300} height={125}/>
            </Link>
            </div>
            </div>

          </div>
        </div>
      )
}


export default About