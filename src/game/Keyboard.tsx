
const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']

const buttons = rows.map((row: string) => row.split(""));


export const Keyboard = (onBackspace, onPressed) => (
  <div className="keyboard">
    <div >
      {buttons.map((row: string[], index: number) => (
        <div key={index}>
          {row.map((letter: string) => (
            <button onClick={() => onPressed(letter)} key={letter}>
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
    <div>
      <button onClick={() => onBackspace()}>
      Backspace
      </button>
    </div>
  </div>
)