import React from 'react'

export default function AlphabetSearch({setParams}) {
  return (
    <>
      <h1>Search by first alphabet: </h1>
      <div className='alphabetSearchContainer'>
        <span onClick={() => setParams('a')}>A/ </span>
        <span onClick={() => setParams('b')}>B/ </span>
        <span onClick={() => setParams('c')}>C/ </span>
        <span onClick={() => setParams('d')}>D/ </span>
        <span onClick={() => setParams('e')}>E/ </span>
        <span onClick={() => setParams('f')}>F/ </span>
        <span onClick={() => setParams('g')}>G/ </span>
        <span onClick={() => setParams('h')}>H/ </span>
        <span onClick={() => setParams('i')}>I/ </span>
        <span onClick={() => setParams('j')}>J/ </span>
        <span onClick={() => setParams('k')}>K/ </span>
        <span onClick={() => setParams('l')}>L/ </span>
        <span onClick={() => setParams('m')}>M/ </span>
        <span onClick={() => setParams('n')}>N/ </span>
        <span onClick={() => setParams('o')}>O/ </span>
        <span onClick={() => setParams('p')}>P/ </span>
        <span onClick={() => setParams('q')}>Q/ </span>
        <span onClick={() => setParams('r')}>R/ </span>
        <span onClick={() => setParams('s')}>S/ </span>
        <span onClick={() => setParams('t')}>T/ </span>
        <span onClick={() => setParams('u')}>U/ </span>
        <span onClick={() => setParams('v')}>V/ </span>
        <span onClick={() => setParams('w')}>W/ </span>
        <span onClick={() => setParams('x')}>X/ </span>
        <span onClick={() => setParams('y')}>Y/ </span>
        <span onClick={() => setParams('z')}>Z/ </span>
      </div>
    </>
    
  )
}
