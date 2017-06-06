export const getOSIcon = os => {
  switch (os) {
    case 'windows':
    case 'osx':
    case 'linux':
    case 'android':
      return os;
    default:
      return false;
  }
}