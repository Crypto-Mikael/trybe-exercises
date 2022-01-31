from bowling_game.frame import Frame, FrameTypes, TenthFrame
from unittest.mock import patch


def test_frame_base_state():
    frame = Frame()
    assert frame.first_roll == 0
    assert frame.second_roll == 0
    assert frame.type == FrameTypes.UNPLAYED


@patch('bowling_game.frame.randint')
def test_frame_regular_play(randint_mock):
    randint_mock.return_value = 1
    frame = Frame()
    frame.play()

    assert frame.first_roll == 1
    assert frame.second_roll == 1
    assert frame.type == FrameTypes.REGULAR


@patch('bowling_game.frame.randint')
def test_frame_spare_play(randint_mock):
    randint_mock.return_value = 5
    frame = Frame()
    frame.play()

    assert frame.first_roll == 5
    assert frame.second_roll == 5
    assert frame.type == FrameTypes.SPARE


@patch('bowling_game.frame.randint')
def test_frame_strike_play(randint_mock):
    randint_mock.return_value = 10
    frame = Frame()
    frame.play()

    assert frame.first_roll == 10
    assert frame.second_roll == 0
    assert frame.type == FrameTypes.STRIKE


def test_tenth_frame_base_state():
    frame = TenthFrame()
    assert frame.first_roll == 0
    assert frame.second_roll == 0
    assert frame.third_roll == 0
    assert frame.type == FrameTypes.UNPLAYED


@patch('bowling_game.frame.randint')
def test_frame_spare(randint_mock):
    randint_mock.return_value = 5
    frame = TenthFrame()
    frame.play()

    assert frame.first_roll == 5
    assert frame.second_roll == 5
    assert frame.third_roll == 5
    assert frame.type == FrameTypes.SPARE


@patch('bowling_game.frame.randint')
def test_tenth_frame_strike(randint_mock):
    randint_mock.side_effect = (
        10,
        4,
        2,
    )
    frame = TenthFrame()
    frame.play()

    assert frame.first_roll == 10
    assert frame.second_roll == 4
    assert frame.third_roll == 2
    assert frame.type == FrameTypes.STRIKE


@patch('bowling_game.frame.randint')
def test_tent_frame_multiple_strike(randint_mock):
    randint_mock.return_value = 10
    frame = TenthFrame()
    frame.play()

    assert frame.first_roll == 10
    assert frame.second_roll == 10
    assert frame.third_roll == 10
    assert frame.type == FrameTypes.STRIKE
