// Test away!
import React from 'react.js';
import { render, fireEvent} from '@testing-library/react';
import Controls from '../controls/Controls.js';

test("cannot be closed or opened if locked", () => {
    const toggle = jest.fn();
    const { getText } = render (
        <Controls locked={true} closed={true} toggle={ toggle } />
    ); //end of render 
    const openGate = getByText(/open gate/i);
    fireEvent.click(openGate);
    expect(toggle).not.toHaveBeenCalled();
});

