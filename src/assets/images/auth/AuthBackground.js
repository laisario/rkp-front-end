// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// image
import logoRKP from '../logoRKP.png';

// ==============================|| AUTH BLUR BACK SVG ||============================== //

const AuthBackground = () => {
    const theme = useTheme();
    return (
        <Box sx={{ textAlign: 'center' }}>
            <img src={logoRKP} alt="Logo RKP" style={{ width: '50%' }} />
        </Box>
    );
};

export default AuthBackground;
