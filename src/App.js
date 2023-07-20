import "./App.css";
import SideBar from "./components/SideBar";

function App() {
  const [arr, setArr] = useState([]);
  const [generating, setGenerating] = useState(false);
  const [sorting, setSorting] = useState(false);

  const generateArr = (formState) => {
    let newArr = [];
    while (newArr.length <= formState.size) {
      let random = Math.floor(Math.random() * (200 - 10) + 10);
      if (newArr.indexOf(random) === -1) {
        newArr.push(random);
      }
    }
    setArr([...newArr]);
  };
  useEffect(() => {
    generateArr({ size: 10 });
  }, []);

  const sort = () => {
    setTimeout(() => {
      let newArr = [...arr];
      for (let i = 0; i < arr.length - 1; i++) {
        setTimeout(() => {
          for (let j = i + 1; j < arr.length; j++) {
            if (newArr[i] > newArr[j]) {
              let temp = newArr[i];
              newArr[i] = newArr[j];
              newArr[j] = temp;
              let newStep = [...newArr];
              setTimeout(() => {
                setArr([...newStep]);
              }, j * 100);
            }
          }
        }, i * 1000);
      }
    }, 500);
  };
  return (
    <Box p={"4"}>
      <Flex gap={"4"}>
        <Sidebar generateArr={generateArr} sort={sort} />
        <Visualiser data={arr} />
      </Flex>
    </Box>
  );
}

export default App;
