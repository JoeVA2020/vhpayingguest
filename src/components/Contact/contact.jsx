import './contact.css'
import facebook from '../Images/facebook_wlogo.png'
import instagram from '../Images/insta_wlogo.png'
import whatsapp from '../Images/whatsapp_wlogo.png'
import phone from '../Images/phone.png'


export default function Contact(){
    return(
        <>  
        <div className='contactContainer'>
        <footer>
        <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.60988388035142!2d76.94868227479934!3d8.522846599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbd8e20ac435%3A0xbe210c7f83bede5d!2sGWFX%2B4HP%2C%20Marappalam%2C%20Thiruvananthapuram%2C%20Kerala%20695003!5e0!3m2!1sen!2sin!4v1722365212528!5m2!1sen!2sin"  referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
    <address>
    TC18/1473, VH335 <br />
    VIKRAMAPURAM HILLS, <br />
    KURAVANKONAM, KOWDIAR P.O. <br />
    THIRUVANATHAPURAM 695003 <br />
    
    </address>
    <div class="social-media">
      <a href="https://www.facebook.com/profile.php?id=61557147735629" target="_blank"><img src={facebook} alt="facebookLogo" /></a>
      <a href="https://www.instagram.com/vh_paying_guest_tvm/" target="_blank"><img src={instagram} alt="InstagramLogo" /></a>
      <a href=" https://wa.me/+919947044401" target="_blank"><img src={whatsapp} alt="WhatsappLogo" /></a>
        <div className='phone'>
        <img src={phone} alt="phoneLogo" /><p>(+91)9947044401</p>
          </div>
      
    </div>
    
  </footer>
        </div>
    
        </>
    )
}