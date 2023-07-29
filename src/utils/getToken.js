const getToken = () => {
  return localStorage.getItem('@token-skj') || null;
}


export { getToken }