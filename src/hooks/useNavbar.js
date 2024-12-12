import { useLocation } from 'react-router-dom';

export function useNavbar() {
  const location = useLocation();
  return location.pathname !== '/';
}
