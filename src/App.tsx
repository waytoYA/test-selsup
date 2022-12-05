import React, { useState } from 'react';

interface Param {
  id: number;
  name: string;
  type: 'string';
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
  // colors: Color[];
}

interface Props {
  params: Param[];
  model: Model;
}

const App = () => {

  const params = [
    {
      id: 1,
      name: "Назначение"
    },
    {
      id: 2,
      name: "Длина"
    },
  ]
  
  const model = {
    paramValues: [
      {
        paramId: 1,
        value: "повседневное"
      },
      {
        paramId: 2,
        value: "макси"
      },
    ]
  }

  const [models, setModels] = useState<Model>(model)

  const edit = (parId: number, val: string) => {
    setModels({paramValues: models.paramValues.map(p => p.paramId == parId ? {...p, 'value': val} : p)})
  }

  // получение всей структуры
  const getModel = () => {
    return models
  }

  return (
    <>

     {models.paramValues.map(model => 
      
        <div style={{'margin': '5px'}} key={model.paramId}>

          {params.map(p => 
            <span key={p.id}>
              {p.id == model.paramId 
              &&
              p.name
              }
            </span>
          )}
        
          <input 
            type='text'
            value={model.value}
            style={{'marginLeft': '8px'}}
            onChange={e => edit(model.paramId, e.target.value)}
          />

        </div>

      )}

      Демонстрация изменений в json:
      <div>
        {JSON.stringify(models)}
      </div>

    </>
  );
}

export default App;
