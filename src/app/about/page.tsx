import styles from "../about/about.module.css"
import Link from "next/link";
const Homepage = ()=>{
    return (
        
             <div className= {styles.container}>
            <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
      <li><Link href="/services">Services</Link></li>
    </ul>
            <h1 className= {styles.header}>Gulzaman Arain web developers!</h1> 
            

        </div>
    )
    
    
};


export default Homepage