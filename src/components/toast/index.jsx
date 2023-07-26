import { Toaster } from "react-hot-toast";

const ToastMain = () => {
  return (
    <Toaster
      position="bottom-left"
      toastOptions={{
        duration: 3000,
        success: {
          style: {
            borderLeft: '8px solid #369C86',
            borderRadius: '8px',
            padding: '12px',
            color: '#369C86',
            backgroundColor: 'rgba(229,245,240,0.96)',
            width: '360px',
          },
          iconTheme: {
            primary: '#369C86',
            secondary: '#FFFAEE',
          }
        },
        error: {
          style: {
            borderLeft: '8px solid #FD5642',
            borderRadius: '8px',
            padding: '12px',
            color: '#FD5642',
            backgroundColor: 'rgba(245, 229, 229,0.96)',
            width: '360px',
          },
          iconTheme: {
            primary: '#FD5642',
            secondary: '#FFFAEE',
          }
        },
        style: {
          borderLeft: '8px solid #FEA10F',
          borderRadius: '8px',
          padding: '12px',
          color: '#FEA10F',
          backgroundColor: 'rgba(245, 229, 229,0.96)',
          width: '360px',
        },
      }
      }
    >
    </Toaster>
  )
}

export default ToastMain