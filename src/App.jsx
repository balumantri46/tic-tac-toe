/*
import { useState } from 'react'
import './App.css'

function Square({ value, onSquareClick, winning }) {
  return (
    <button
      className={`square ${winning ? 'winning' : ''}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  )
}

function Board({ squares, onPlay, winningLine }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return
    onPlay(i)
  }

  return (
    <div className="board">
      {[0, 1, 2].map((row) => (
        <div key={row} className="board-row">
          {[0, 1, 2].map((col) => {
            const index = row * 3 + col
            return (
              <Square
                key={index}
                value={squares[index]}
                onSquareClick={() => handleClick(index)}
                winning={winningLine?.includes(index)}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}

function App() {
  const [gameMode, setGameMode] = useState(null)
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const [xIsNext, setXIsNext] = useState(true)

  const currentSquares = history[currentMove]
  const winner = calculateWinner(currentSquares)
  const winningLine = winner?.line

  function handlePlay(nextSquare) {
    if ((gameMode === 'computer' && !xIsNext) || winner) return

    const nextSquares = [...currentSquares]
    nextSquares[nextSquare] = xIsNext ? 'X' : 'O'

    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
    setXIsNext(!xIsNext)

    // Computer's turn after player move
    if (gameMode === 'computer' && !winner) {
      setTimeout(() => {
        const computerMove = getBestMove(nextSquares)
        if (computerMove !== null) {
          const computerSquares = [...nextSquares]
          computerSquares[computerMove] = 'O'
          setHistory([...nextHistory, computerSquares])
          setCurrentMove(nextHistory.length)
          setXIsNext(true)
        }
      }, 500)
    }
  }

  function getBestMove(squares) {
    // AI is 'O', player is 'X'
    let bestScore = -Infinity
    let bestMove = null

    for (let i = 0; i < 9; i++) {
      if (!squares[i]) {
        squares[i] = 'O'
        let score = minimax(squares, 0, false)
        squares[i] = null
        if (score > bestScore) {
          bestScore = score
          bestMove = i
        }
      }
    }
    return bestMove
  }

  function minimax(squares, depth, isMaximizing) {
    const result = calculateWinner(squares)
    if (result) {
      return result.player === 'O' ? 10 - depth : depth - 10
    }
    if (isBoardFull(squares)) return 0

    if (isMaximizing) {
      let bestScore = -Infinity
      for (let i = 0; i < 9; i++) {
        if (!squares[i]) {
          squares[i] = 'O'
          let score = minimax(squares, depth + 1, false)
          squares[i] = null
          bestScore = Math.max(score, bestScore)
        }
      }
      return bestScore
    } else {
      let bestScore = Infinity
      for (let i = 0; i < 9; i++) {
        if (!squares[i]) {
          squares[i] = 'X'
          let score = minimax(squares, depth + 1, true)
          squares[i] = null
          bestScore = Math.min(score, bestScore)
        }
      }
      return bestScore
    }
  }

  function isBoardFull(squares) {
    return squares.every(square => square !== null)
  }

  function handleReset() {
    setHistory([Array(9).fill(null)])
    setCurrentMove(0)
    setXIsNext(true)
    setGameMode(null)
  }

  let status
  if (winner) {
    status = `Winner: ${winner.player}`
  } else if (isBoardFull(currentSquares)) {
    status = "It's a draw!"
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }

  if (!gameMode) {
    return (
      <div className="game-start">
        <h1>Tic Tac Toe</h1>
        <div className="mode-selection">
          <button onClick={() => setGameMode('friend')}>
            Play with Friend
          </button>
          <button onClick={() => setGameMode('computer')}>
            Play with Computer
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <div className="game-info">
        <div className="status">{status}</div>
        <button className="reset-button" onClick={handleReset}>
          Reset Game
        </button>
      </div>
      <div className="game-board">
        <Board
          squares={currentSquares}
          onPlay={handlePlay}
          winningLine={winningLine}
        />
      </div>
    </div>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line: [a, b, c] }
    }
  }
  return null
}

export default App
*/

//final code with added difficulties.
import { useState,ReactDOM} from 'react'
import './App.css'

function Square({ value, onSquareClick, winning }) {
  return (
      <button
          className={`square ${winning ? 'winning' : ''}`}
          onClick={onSquareClick}
      >
        {value}
      </button>
  )
}

function Board({ squares, onPlay, winningLine }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return
    onPlay(i)
  }

  return (
      <div className="board">
        {[0, 1, 2].map((row) => (
            <div key={row} className="board-row">
              {[0, 1, 2].map((col) => {
                const index = row * 3 + col
                return (
                    <Square
                        key={index}
                        value={squares[index]}
                        onSquareClick={() => handleClick(index)}
                        winning={winningLine?.includes(index)}
                    />
                )
              })}
            </div>
        ))}
      </div>
  )
}

function App() {
  const [gameMode, setGameMode] = useState(null)
  const [difficulty, setDifficulty] = useState(null)
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const [xIsNext, setXIsNext] = useState(true)

  const currentSquares = history[currentMove]
  const winner = calculateWinner(currentSquares)
  const winningLine = winner?.line

  function handlePlay(nextSquare) {
    if ((gameMode === 'computer' && !xIsNext) || winner) return

    const nextSquares = [...currentSquares]
    nextSquares[nextSquare] = xIsNext ? 'X' : 'O'

    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
    setXIsNext(!xIsNext)

    // Computer's turn
    if (gameMode === 'computer' && !winner) {
      setTimeout(() => {
        let computerMove
        switch(difficulty) {
          case 'easy':
            computerMove = getRandomMove(nextSquares)
            break
          case 'medium':
            computerMove = getMediumMove(nextSquares)
            break
          case 'hard':
            computerMove = getBestMove(nextSquares)
            break
          default:
            computerMove = getRandomMove(nextSquares)
        }

        if (computerMove !== null) {
          const computerSquares = [...nextSquares]
          computerSquares[computerMove] = 'O'
          setHistory([...nextHistory, computerSquares])
          setCurrentMove(nextHistory.length)
          setXIsNext(true)
        }
      }, 520)
    }
  }
  // Easy: Random moves
  function getRandomMove(squares) {
    const emptySquares = squares
        .map((square, index) => square === null ? index : null)
        .filter(square => square !== null)
    return emptySquares.length > 0
        ? emptySquares[Math.floor(Math.random() * emptySquares.length)]
        : null
  }
  // Medium: bocks win and makes optimal and random moves some times.
  function getMediumMove(squares) {
    // Try to win first
    for (let i = 0; i < 9; i++) {
      if (!squares[i]) {
        const temp = [...squares] //getting full squares array(spreading) .
        temp[i] = 'O'
        if (calculateWinner(temp)) return i
      }
    }

    // Block player win
    for (let i = 0; i < 9; i++) {
      if (!squares[i]) {
        const temp = [...squares]
        temp[i] = 'X'
        if (calculateWinner(temp)) return i
      }
    }

    // 50% chance to make optimal move
    if (Math.random() < 0.3) {
      const bestMove = getBestMove(squares)
      if (bestMove !== null) return bestMove
    }

    // Otherwise random
    return getRandomMove(squares)
  }

  // Hard: Minimax algorithm (unbeatable)
  function getBestMove(squares) {
    let bestScore = -Infinity
    let bestMove = null

    for (let i = 0; i < 9; i++) {
      if (!squares[i]) {
        squares[i] = 'O'
        let score = minimax(squares, 0, false)
        squares[i] = null
        if (score > bestScore) {
          bestScore = score
          bestMove = i
        }
      }
    }
    return bestMove
  }

  function minimax(squares, depth, isMaximizing) {
    const result = calculateWinner(squares)
    if (result) {
      return result.player === 'O' ? 10 - depth : depth - 10
    }
    if (isBoardFull(squares)) return 0

    if (isMaximizing) {
      let bestScore = -Infinity
      for (let i = 0; i < 9; i++) {
        if (!squares[i]) {
          squares[i] = 'O'
          let score = minimax(squares, depth + 1, false)
          squares[i] = null
          bestScore = Math.max(score, bestScore)
        }
      }
      return bestScore
    } else {
      let bestScore = Infinity
      for (let i = 0; i < 9; i++) {
        if (!squares[i]) {
          squares[i] = 'X'
          let score = minimax(squares, depth + 1, true)
          squares[i] = null
          bestScore = Math.min(score, bestScore)
        }
      }
      return bestScore
    }
  }

  function isBoardFull(squares) {
    return squares.every(square => square !== null)
  }

  function handleReset() {
    setHistory([Array(9).fill(null)])
    setCurrentMove(0)
    setXIsNext(true)
    setGameMode(null)
    setDifficulty(null)
  }

  let status
  if (winner) {
    status = `Winner: ${gameMode === 'computer' && winner.player === 'O' ? 'Computer' : winner.player}`
  } else if (isBoardFull(currentSquares)) {
    status = "It's a draw!"
  } else {
    status = `Next player: ${xIsNext ? 'X' : (gameMode === 'computer' ? 'Computer' : 'O')}`
  }

  if (!gameMode) {
    return (
        <div className="game-start">
          <h1> Tic <span>|</span> Tac <span>|</span> Toe </h1>
          <div className="mode-selection">
            <button onClick={() => setGameMode('friend')}>
              Play with Friend
            </button>
            <button onClick={() => setGameMode('computer')}>
              Play with Computer
            </button>
          </div>

          <div>
          <p>Made by Balu.</p>
          </div>
        </div>
    )
  }

  if (gameMode === 'computer' && !difficulty) {
    return (<>
        <div className="difficulty-selection">
          <h2>Choose Difficulty</h2>
          <button onClick={() => setDifficulty('easy')} className="easy-btn">Easy</button>
          <button onClick={() => setDifficulty('medium')} className="med-btn">Medium</button>
          <button onClick={() => setDifficulty('hard')} className="hard-btn">Hard (UnPredictable🤙)</button>
        </div>
        {/*<a href="./info.html" className="info-link">Know About the computer moves</a>*/}
      </>
    )
  }

  return (
      <div className="game">
        <h1>Tic <span>|</span> Tac <span>|</span> Toe</h1>
        <div className="game-info">
          <div className="status">{status}</div>
          {gameMode === 'computer' && (
              <div className="difficulty-indicator">
                Difficulty: {difficulty}
              </div>
          )}
          <button className="reset-button" onClick={handleReset}>
            Reset Game
          </button>
        </div>
        <div className="game-board">
          <Board
              squares={currentSquares}
              onPlay={handlePlay}
              winningLine={winningLine}
          />
        </div>
      </div>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line: [a, b, c] }
    }
  }
  return null
}

export default App