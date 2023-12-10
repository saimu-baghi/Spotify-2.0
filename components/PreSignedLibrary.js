import Button from './Button';
import { PreSignedLibraryItem } from './PreSignedLibraryItem';

function PreSignedLibrary() {
  return (
    <>
      <div className=' '>
        <ul className='space-y-5'>
          {PreSignedLibraryItem.map((item, index) => {
            return (
              <li className='bg-neutral-100/10 rounded-md p-4 space-y-3' key={index}>
                <h6 className='font-bold'>{item.title}</h6>
                <p className='text-sm'>{item.description}</p>
                <Button className='bg-white px-4 py-1 w-fit'>{item.buttonText}</Button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default PreSignedLibrary;
