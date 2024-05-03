import Button from "../../ui/Button";
import React from 'react'
import Modal from "../../ui/Modal";
import CreateCabinForm from '../cabins/CreateCabinForm'
import CabinTable from '../cabins/CabinTable'

function AddCabin() {
  return ( 
    <div>
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>    
    </Modal>
    </div>    
   );
}

export default AddCabin;

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//       <Modal onClose={() => setIsOpenModal(false)}>
//         <CreateCabinForm onCloseModal={() => setIsOpenModal(false)}/>
//       </Modal>
//       )}
//     </div>
//   )
// }

// export default AddCabin
