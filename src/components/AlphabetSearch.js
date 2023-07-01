import React from 'react'

export default function AlphabetSearch({setNewParams}) {
  return (
    <div className='alphabetSearchContainer'>
      <span onClick={() => setNewParams('a')}>A/ </span>
      <span onClick={() => setNewParams('b')}>B/ </span>
      <span onClick={() => setNewParams('c')}>C/ </span>
      <span onClick={() => setNewParams('d')}>D/ </span>
      <span onClick={() => setNewParams('e')}>E/ </span>
      <span onClick={() => setNewParams('f')}>F/ </span>
      <span onClick={() => setNewParams('g')}>G/ </span>
      <span onClick={() => setNewParams('h')}>H/ </span>
      <span onClick={() => setNewParams('i')}>I/ </span>
      <span onClick={() => setNewParams('j')}>J/ </span>
      <span onClick={() => setNewParams('k')}>K/ </span>
      <span onClick={() => setNewParams('l')}>L/ </span>
      <span onClick={() => setNewParams('m')}>M/ </span>
      <span onClick={() => setNewParams('n')}>N/ </span>
      <span onClick={() => setNewParams('o')}>O/ </span>
      <span onClick={() => setNewParams('p')}>P/ </span>
      <span onClick={() => setNewParams('q')}>Q/ </span>
      <span onClick={() => setNewParams('r')}>R/ </span>
      <span onClick={() => setNewParams('s')}>S/ </span>
      <span onClick={() => setNewParams('t')}>T/ </span>
      <span onClick={() => setNewParams('u')}>U/ </span>
      <span onClick={() => setNewParams('v')}>V/ </span>
      <span onClick={() => setNewParams('w')}>W/ </span>
      <span onClick={() => setNewParams('x')}>X/ </span>
      <span onClick={() => setNewParams('y')}>Y/ </span>
      <span onClick={() => setNewParams('z')}>Z/ </span>
    </div>
  )
}
