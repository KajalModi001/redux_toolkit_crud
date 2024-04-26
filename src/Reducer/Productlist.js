import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MDBTable, MDBTableHead, MDBTableBody, MDBInput, MDBFile, MDBBtn } from 'mdb-react-ui-kit';
import { removeproduct, addproduct, updateproduct } from '../Reducer/Productslice'

export default function Productlist() {

           const listproduct= useSelector((state) => state.product)

           const dispatch = useDispatch()

           let deletedata = (id)=>{
            dispatch(removeproduct(id))
           }

           let adddata = (event) => {
            event.preventDefault();
            let name = document.getElementById('name').value
            let image = document.getElementById('image').value
            let price = document.getElementById('price').value
            let quantity = document.getElementById('quantity').value
            let id = listproduct.length +1

            let temp ={
                'id':id,
                'name':name,
                'image':image,
                'price':price,
                'quantity':quantity
            }

            dispatch(addproduct(temp))
           }

           const updatedata = (updatedProduct) => {
            dispatch(updateproduct(updatedProduct));
        }



  return (
    <>
    <br/>
   
    <div>     
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr className='table-secondary'>
          <th scope='col'>ID</th>
          <th scope='col'>Product Name</th>
          <th scope='col'>Image</th>
          <th scope='col'>Price</th>
          <th scope='col'>Quantity</th>
          <th scope='col'>Action</th>

        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {listproduct.map((item)=>(
             <tr className='table-secondary'>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td><img src={item.image} style={{height:'100px',width:'100px'}}></img></td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td><p><i class="fa-solid fa-trash" onClick={()=>deletedata(item.id)} style={{cursor:'pointer'}}></i></p>
                    <p><i class="fa-solid fa-pen" onClick={()=>updatedata(item.id)} style={{cursor:'pointer'}}></i></p></td>
            </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
    </div>


    <div>
        <form onSubmit={adddata}>
    <MDBInput label='Enter product name' id='name' type='text' />

    <MDBInput label='Enter price' id='price' type='text' />

    <MDBInput label='Enter quantity' id='quantity' type='number' />

    <MDBFile label='Select image' id='image' />

    <MDBBtn className='me-1' color='success'>
        submit
      </MDBBtn>
    </form>
    </div>

   
    </>
  )
}
