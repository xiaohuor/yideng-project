const data = [
  {
    id: "1",
    name: "jack",
    birth: 720576000000,
  },
  {
    id: "2",
    name: "alex",
    birth: 846806400000,
  },
  {
    id: "1",
    name: "jackson",
    birth: 878342400000,
  },
  {
    id: "3",
    name: "mark",
    birth: 783648000000,
  },
]

// id覆盖
const targetData = {};
data.forEach(item => {
  targetData[item.id] = item;
})

// 过滤95后
for(let key in targetData) {
  if((new Date(targetData[key].birth) - new Date("1995-01-01"))<0){
    delete targetData[key];
  }
}

// name 排序
const dataSorted = Object.values(targetData);
dataSorted.sort((a, b) => a.name[0].charCodeAt() - b.name[0].charCodeAt());

// 分页
const pageData = (data, current, size) => {
  const arr = JSON.parse(JSON.stringify(data));
  return arr.splice(current*size - current, current*size)
}

