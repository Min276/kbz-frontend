import styles from "./footer.module.css";
import {FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter} from "react-icons/fa"
import {BsTelephoneFill} from "react-icons/bs"
import {RiSendPlaneFill} from "react-icons/ri"

const Footer = () => {
    return(
        <div className={styles.footer}>
        <div className="flex gap-36">
            <div className="flex flex-col w-2/5 gap-5">
            <img src="/assets/logo-white.svg" width={250} height={250} alt="logo" />
            <div className="flex gap-4 mt-3">
            <FaMapMarkerAlt color="#FFB547" fontSize="20px" style={{ marginLeft: 2 }}/>
            <h6 className="text-white">
            1250 Capital of Texas Hwy. South
            Building 3, 
            Suite 400
            Austin, TX 78746
            </h6>
            </div>
            <div className="flex gap-3">
            <RiSendPlaneFill color="#FFB547" fontSize="20px"  />
            <h6 className="text-white">
            Support: admin@kbzmoney.com
            </h6>
            </div>
            <div className="flex gap-3">
            <BsTelephoneFill color="#FFB547" fontSize="18px" style={{ marginTop: 4 }} />
            <h6 className="text-white">
            Hotline: +959 7980 65880
            </h6>
            </div>
            </div>
             <div className="flex w-3/5 gap-5 text-white">
            <div className="flex flex-col w-1/3 gap-5 text-white">
                <h6 className="mt-4 mb-4 font-semibold text-xl">Quick Links</h6>
                <h6>
                    Home
                </h6>
                <h6>Services</h6>
                <h6>AML Technology</h6>
                <h6>Crypto Currencies</h6>
                <h6>Resources</h6>
            </div>
            <div className="flex flex-col w-1/3 gap-5 text-white">
                <h6 className="mt-4 mb-4 font-semibold text-xl invisible">Quick Links</h6>
                <h6>
                    Contact
                </h6>
                <h6>About Us</h6>
                <h6>Client Support</h6>
                <h6>Alerts</h6>
            </div>
            <div className="flex flex-col w-1/3 gap-5 text-white">
                <h6 className="mt-4 mb-4 font-semibold text-xl">About Us</h6>
                <h6>
                    Disclaimer
                </h6>
                <h6>Privacy Policy</h6>
                <h6>Terms of Service</h6>
                <h6>Careers</h6>
            </div>
            </div>
        </div>
        <hr className="mt-12 opacity-20" />
        <div className="flex justify-between items-center text-white font-[500] mt-8">
          <h6>Copyright &copy; 2022 <span className="text-[#FFB547]">KBZ Money</span>. All Rights Reserved.</h6>
          <div className="flex gap-6">
            <div className="w-10 h-10 flex justify-center items-center border-2 rounded-full">
            <FaFacebookF fontSize="15px" />
            </div>
            <div  className="w-10 h-10 flex justify-center items-center bg-[#FFB547] rounded-full">
            <FaLinkedinIn fontSize="15px" />
            </div>
            <div  className="w-10 h-10 flex justify-center items-center border-2 rounded-full">
             <FaInstagram fontSize="15px"/>
            </div>
            <div  className="w-10 h-10 flex justify-center items-center border-2 rounded-full">
            <FaTwitter fontSize="15px" />
            </div>
          </div>
        </div>
        </div>
    )
}

export default Footer;