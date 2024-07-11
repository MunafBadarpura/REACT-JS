import { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';





function App() {
  const [checkDelete, setCheckDelete] = useState(false);

  function deleteIcon(){
    setCheckDelete(!checkDelete);
  }
  return(
    <>
      <h3>Material UI</h3>
      <Button variant='outline' size='small'>Click ME</Button>
      <Button variant='contained' size='medium'>Click ME</Button>
      <Button color='error' variant='contained' size='large'>Click ME</Button>

      <Button variant="outlined" startIcon={<DeleteIcon />} onClick={deleteIcon}> Delete </Button>
      
      {checkDelete && (
        <Alert variant="filled" severity="error"> This is a filled error Alert. </Alert>
      )}
    </>
  )
}

export default App
