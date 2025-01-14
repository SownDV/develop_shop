import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { getProductById } from './ManageOrdersServices';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

export default function ManageOrdersDialog(props) {
  let { open, item, search, handleClose } = props;
  const [state, setState] = useState({});
  const [productsList, setProductsList] = useState([]);

  const steps = ['Pending', 'Processing', 'Shipped', 'Delivered'];

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState((pre) => ({ ...pre, [name]: value }));
  };

  const getProductNameById = async (idPro) => {
    try {
      const res = await getProductById(idPro);
      setProductsList((pre) => [
        ...pre, res?.data?.product
      ]);

        // setProductsList(res?.data?.product?.product_name)
    } catch (error) {
      console.error(`Failed to get product name by id: ${error}`);
      return null;
    }
  }

  useEffect(() => {
    async function fetchProductNames() {
      const names = await Promise.all(item?.items?.map(async (item) => {
        const productData = await getProductNameById(item?.item_id);
      }));
    }
  
    fetchProductNames();
  }, [item?.items]);
  

  useEffect(() => {
    setState({
      ...item,
    });
  }, [item]);

  console.log(productsList);
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            // handleSubmit()
          },
        }}
      >
        <DialogTitle>Chi tiết đơn hàng</DialogTitle>
        <DialogContent>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Stepper activeStep={0} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Grid>
            <Grid item xs={12}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>STT</TableCell>
                      <TableCell align="center">Tên sản phẩm</TableCell>
                      <TableCell align="center">Số lượng</TableCell>
                      <TableCell align="right">Giá</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {item?.items?.map((item, index) => (
                        
                      <TableRow>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell align="center">
                          {productsList[index]?.product_name}
                        </TableCell>
                        <TableCell align="center">{item?.quantity}</TableCell>
                        <TableCell align="right">
                        ${productsList[index]?.variants[0]?.price}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" size="small" color="error" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="contained" size="small" type="submit">
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
