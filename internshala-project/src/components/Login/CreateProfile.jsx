import "../../App.css";
import { useState } from "react";
import Button from '../Buttons/Button';
import Logo from '../Logo/Logo';

const CreateProfile = ({onhandlenext}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [isDisabled, setIsDisabled] = useState(true);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
    setIsDisabled(false);
  };

  return (
    <div>
      <Logo/>
      <div className='m-auto w-3/4 pl-10 my-5 space-y-5'>
        <form>
          <div className='space-y-4 mb-12'>
            <div className='font-bold text-4xl'>Welcome! Let's create your profile</div>
            <div className="text-gray-400 text-md">Let others get to know you better! You can do these later</div>
          </div>
          <div className='text-2xl font-bold mb-5'>Add an Avatar</div>
          <div className="md:flex space-y-6 md:space-y-0 md:space-x-6 mb-10">
            <div style={{backgroundSize: 'contain'}} className='flex justify-center w-48 h-48 rounded-full border-2 border-dashed border-gray-300'>
                {selectedImage ? (
                    <img style={{width: '12rem', height: '12rem'}} className="rounded-full" src={selectedImage} alt="Selected Image" />
                ):(
                  <div className="flex text-gray-400 self-center">
                    <i className="fa-solid fa-camera text-2xl"></i>
                  </div>
                )}
            </div>
            <div className='space-y-4 self-center'>
              <div>
                <input type="file" onChange={handleImageChange} />
              </div>
              <div className='text-gray-300 text-sm font-semibold'>
                <p className='hoverTodark'>Or choose one of our defaults</p>
              </div>
            </div>
          </div>
          <div className='text-2xl font-bold mb-5'>Add your location</div>
          <div className="w-full border-b-2 py-2">
              <input className="w-full font-semibold p-2" type="text" placeholder="Enter a location"/>
          </div>

          <Button onhandlenext={onhandlenext} disabled={isDisabled} className="px-10 mt-10">Next</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
