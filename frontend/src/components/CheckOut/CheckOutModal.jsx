import Modal from '../UI/Modal.jsx';

export default function CheckOutModal({ isCheckOutOpen }) {

  return (
    <Modal open={isCheckOutOpen}>
     <p className='text-center text-[2rem]'>
     this is the checkout section!
     </p>
    </Modal>
  );
}
