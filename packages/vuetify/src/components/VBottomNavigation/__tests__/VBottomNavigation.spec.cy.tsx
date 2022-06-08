/// <reference types="../../../../types/cypress" />

import { VLayout } from '@/components/VLayout'
import { VBottomNavigation } from '../VBottomNavigation'

describe('VBottomNavigation', () => {
  it('should not be visible if modelValue is false', () => {
    cy.mount(() => (
      <VLayout>
        <VBottomNavigation modelValue={false}></VBottomNavigation>
      </VLayout>
    ))

    cy.get('.v-bottom-navigation').should('not.be.visible')
  })
})
