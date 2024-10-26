 
import './Footer.css'
const Footer = () => {
  return (
    <footer className='footer bg-slate-600 text-slate-50 py-4' >
    <div  className=' flex flex-col-2 space-x-6 items-center px-4 '>
      <p>&copy; {new Date().getFullYear()} Gain Solutions. All rights reserved.</p>
      
      <div  className='flex flex-col'>
       <a href="mailto:iratul010@gmail.com" className="text-blue-400"><span className='text-white'>Email:</span> iratul010@gmail.com </a>
        <p> Phone: ++8801784083508 </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;