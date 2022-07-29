import { useAtomsDevtools } from 'jotai/devtools';

//Jotai에서 redux devtools를 사용할 수 있게 해줍니다.
export const AtomDevtools = ({ children }) => {
  useAtomsDevtools('atomDevtools', { enabled: true });
  return children;
};
