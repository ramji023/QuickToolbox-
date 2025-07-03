import img from '../../assets/icons/img.png';
import icons from '../../assets/icons/icons.png';
import json from '../../assets/icons/json.png';
import url from '../../assets/icons/url.png';
import open_pane from '../../assets/icons/open_pane.png';

export default function sidebar() {

  //icon and text for the modules
  const modules = {
    "Image": {
      icon: img,
      text: "Img Resizer"
    },
    "csv to json": {
      icon: json,
      text: "CSV to JSON "
    },
    "url": {
      icon: url,
      text: "URL Shortener"
    },
    "Icon": {
      icon: icons,
      text: "Icon Generator"
    }

  }

  return (
    <div className='h-screen w-72 border-r border-gray-200 shadow-md flex bg-gray-50 flex-col   pt-4'>

      <div className='flex justify-end px-4'>
        <button>        <img src={open_pane} alt="" className='w-6 h-6 ' />
        </button>

      </div>
      <div className='flex flex-col items-center justify-center '>
        <div>
          <h2 className='font-bold '>Common modules</h2>
        </div>
        <div className="mt-5">
          <ul className="flex gap-2 flex-wrap px-8  justify-between items-center">
            {Object.entries(modules).map(([key, value]) => (
              <li key={key} className='flex text-[0.72rem] font-medium flex-col p-2 items-center gap-2  justify-between border bg-white hover:bg-gray-100 w-26 h-26 border-gray-200 rounded-md  cursor-pointer'>
                <img src={value.icon} alt={key} className='w-10 h-10' />
                <span className='text-gray-700 '>{value.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>)
}
