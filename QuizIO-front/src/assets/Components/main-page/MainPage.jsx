import { React,useState } from 'react';
import styles from './MainPage.module.css'
import LoginIcon from '@mui/icons-material/Login';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from 'react-router-dom'
import UsernameDialog from './UsernameDialog';


const MainPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ul className={styles.Block}>
      <li className={styles.Content}>
        <div>
          <button className={styles.transparentButton} onClick={() => setOpen(true)}>
            <LoginIcon style={{ fontSize: "60px", marginRight: "10%" }} />
            <h2 className={styles.Inscription}>LOG IN BY USERNAME</h2>
          </button>
          <UsernameDialog open={open} setOpen={setOpen} />
        </div>
      </li>

        <li className={styles.Content}>
            <Link>
                <div>
                    <AddCircleOutlineIcon style={{fontSize:"60px", marginLeft:"40%"}}/>
                    <h2 className={styles.Inscription}>CREATE NEW QUIZ</h2>
                </div>
            </Link>
        </li>
      </ul>
    </>
  )
}

export default MainPage
