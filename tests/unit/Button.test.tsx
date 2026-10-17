import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Button } from '../../src/components/ui/Button'

describe('Button', () => {
  it('renderiza o rótulo e executa o clique', () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Salvar</Button>)
    fireEvent.click(screen.getByRole('button', { name: 'Salvar' }))
    expect(onClick).toHaveBeenCalledOnce()
  })
})
