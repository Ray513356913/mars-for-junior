function 关灯 () {
    PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J1, false)
    PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, false)
    PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, false)
}
function 下降开门 () {
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 30)
}
function 第一次吐3蓝球 () {
    左右轮差速(-30, -30)
    basic.pause(600)
    停止(200)
    左右轮差速(25, -25)
    basic.pause(200)
    右转90度找黑线()
    停止(200)
    高级巡线延时(850)
    停止(300)
    右转90度找黑线()
    停止(200)
    高级巡线延时(1900)
    停止(500)
    左右轮差速(25, -30)
    basic.pause(500)
    停止(300)
    固定25后退(200)
    停止(300)
    夹紧()
    for (let index = 0; index < 3; index++) {
        固定25速度前进(50)
        停止(150)
        固定25后退(50)
        停止(150)
    }
    basic.pause(300)
}
function 基础巡线 () {
    PlanetX_Basic.Trackbit_get_state_value()
    if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_1)) {
        前进()
    } else if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_12)) {
        大右转2()
    } else if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_8)) {
        大左转2()
    } else if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_2) || PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_14)) {
        右转()
    } else if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_3) || PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_11)) {
        左转()
    } else {
        前进()
    }
}
function _2222高架任务 () {
    重置舵机()
    基础速度 = 25
    高级巡线延时(800)
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_5))) {
        PlanetX_Basic.Trackbit_get_state_value()
        基础巡线()
    }
    固定25速度前进(150)
    停止(500)
    右转90度找黑线()
    高架2后半段()
}
function 基础巡线延时 (X: number) {
    计时器 = input.runningTime()
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(input.runningTime() > 计时器 + X)) {
        PlanetX_Basic.Trackbit_get_state_value()
        基础巡线()
    }
    计时器 = 0
}
function 顶进去 () {
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 45)
    停止(300)
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S2, 315)
    停止(200)
    左右轮差速(-25, 20)
    basic.pause(200)
    停止(200)
    固定25后退(100)
    停止(200)
    左右轮差速(-25, 20)
    basic.pause(200)
    停止(100)
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 60)
    停止(200)
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S2, 300)
    停止(200)
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S2, 280)
    左右轮差速(-25, 20)
    basic.pause(200)
    停止(200)
}
// 样机左转角度比右转大一点点huoxing 
function _2左转45度 () {
    neZha.setMotorSpeed(neZha.MotorList.M1, -25)
    neZha.setMotorSpeed(neZha.MotorList.M2, 25)
    basic.pause(300)
}
function 颜色识别 () {
    右转90度找黑线()
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_5))) {
        PlanetX_Basic.Trackbit_get_state_value()
        高级巡线()
    }
    固定25速度前进(150)
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1) && PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Four, PlanetX_Basic.TrackbitType.State_1))) {
        PlanetX_Basic.Trackbit_get_state_value()
        基础巡线()
    }
    固定25速度前进(250)
    停止(200)
    左右轮差速(35, -15)
    basic.pause(300)
    while (!(PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1))) {
        左右轮差速(35, -15)
    }
    停止(300)
    基础速度 = 25
    基础巡线延时(1200)
    停止(300)
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_9))) {
        PlanetX_Basic.Trackbit_get_state_value()
        基础巡线()
    }
    停止(300)
    固定25后退(200)
    停止(200)
    for (let index = 0; index < 3; index++) {
        卡片识别()
        basic.pause(200)
    }
}
function 右转 () {
    // 20；8
    neZha.setMotorSpeed(neZha.MotorList.M1, 3)
    neZha.setMotorSpeed(neZha.MotorList.M2, -20)
}
function 左转 () {
    neZha.setMotorSpeed(neZha.MotorList.M1, -20)
    neZha.setMotorSpeed(neZha.MotorList.M2, 3)
}
function 高级巡线延时 (时间: number) {
    计时器 = input.runningTime()
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(input.runningTime() > 计时器 + 时间)) {
        PlanetX_Basic.Trackbit_get_state_value()
        高级巡线()
    }
    计时器 = 0
}
function 右转90度找黑线 () {
    _1右转45度()
    while (!(PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1) || PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_1))) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 25)
        neZha.setMotorSpeed(neZha.MotorList.M2, -25)
    }
}
function 高级巡线 () {
    PlanetX_Basic.Trackbit_get_state_value()
    if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_1)) {
        前进()
    } else if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_12)) {
        PlanetX_Basic.Trackbit_get_state_value()
        while (!(PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1) || PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_1))) {
            大右转2()
        }
    } else if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_8)) {
        PlanetX_Basic.Trackbit_get_state_value()
        while (!(PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1) || PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_1))) {
            大左转2()
        }
    } else {
        前进()
    }
}
function _1右转45度 () {
    neZha.setMotorSpeed(neZha.MotorList.M1, 25)
    neZha.setMotorSpeed(neZha.MotorList.M2, -25)
    basic.pause(300)
}
// 学习巡线后，实心点代表黑线
input.onButtonPressed(Button.A, function () {
    if (线路 < 4) {
        线路 += 1
        basic.showNumber(线路)
        basic.pause(50)
    } else if (线路 >= 4) {
        线路 = 1
        basic.showNumber(线路)
    }
})
function 松开 () {
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S2, 120)
}
function 大左转2 () {
    neZha.setMotorSpeed(neZha.MotorList.M1, -28)
    neZha.setMotorSpeed(neZha.MotorList.M2, 0)
}
function 高架1后半段 () {
    停止(200)
    夹紧()
    basic.pause(600)
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 335)
    basic.pause(500)
    固定25后退(250)
    停止(300)
    左转90度找黑线()
    停止(200)
    下降开门()
    停止(500)
    固定25速度前进(600)
    停止(300)
    右转90度找黑线()
    停止(300)
    高级巡线延时(800)
    while (!(PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_0))) {
        PlanetX_Basic.Trackbit_get_state_value()
        基础巡线()
    }
    停止(500)
    左右轮差速(-25, 20)
    basic.pause(450)
    停止(500)
    固定25速度前进(250)
    停止(300)
    顶进去()
    固定25速度前进(250)
    停止(300)
    左转90度找黑线()
    停止(300)
    高架2后半段()
}
function 固定25速度前进 (a: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, -25)
    neZha.setMotorSpeed(neZha.MotorList.M2, -25)
    basic.pause(a)
}
function 固定25后退 (b: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 25)
    neZha.setMotorSpeed(neZha.MotorList.M2, 25)
    basic.pause(b)
}
function 重置舵机 () {
    松开()
    抬升()
}
function 前进 () {
    neZha.setMotorSpeed(neZha.MotorList.M1, -1 * 基础速度)
    neZha.setMotorSpeed(neZha.MotorList.M2, -1 * 基础速度)
}
function 第二次吐3蓝球 () {
    固定25后退(850)
    停止(500)
    左右轮差速(25, -30)
    basic.pause(500)
    停止(300)
    固定25后退(200)
    停止(300)
    夹紧()
    停止(1500)
    固定25速度前进(200)
    停止(100)
    重置舵机()
    停止(500)
    左右轮差速(-25, 25)
    basic.pause(300)
    停止(500)
}
function _444拨倒开关 () {
    基础速度 = 70
    固定25速度前进(1)
    basic.pause(800)
    基础速度 = 30
    固定25速度前进(1)
    basic.pause(70)
    while (!(PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_5))) {
        PlanetX_Basic.Trackbit_get_state_value()
        基础巡线()
    }
    固定25速度前进(1)
    basic.pause(130)
    _2左转45度()
    basic.pause(100)
    基础巡线延时(0.85)
    停止(1)
    basic.pause(200)
    _1右转45度()
    basic.pause(160)
    停止(1)
    basic.pause(200)
    固定25速度前进(1)
    basic.pause(500)
    固定25后退(1)
    basic.pause(400)
    停止(1)
}
function 左右轮差速 (d: number, e: number) {
    neZha.setMotorSpeed(neZha.MotorList.M2, -1 * d)
    neZha.setMotorSpeed(neZha.MotorList.M1, -1 * e)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "11") {
        neZha.setMotorSpeed(neZha.MotorList.M1, 40)
        neZha.setMotorSpeed(neZha.MotorList.M2, 40)
    } else {
        if (receivedString == "22") {
            neZha.setMotorSpeed(neZha.MotorList.M1, -40)
            neZha.setMotorSpeed(neZha.MotorList.M2, -40)
        } else {
            if (receivedString == "33") {
                neZha.setMotorSpeed(neZha.MotorList.M1, 25)
                neZha.setMotorSpeed(neZha.MotorList.M2, -25)
            } else {
                if (receivedString == "44") {
                    neZha.setMotorSpeed(neZha.MotorList.M1, -25)
                    neZha.setMotorSpeed(neZha.MotorList.M2, 25)
                } else {
                    if (receivedString == "55") {
                        neZha.setMotorSpeed(neZha.MotorList.M1, 0)
                        neZha.setMotorSpeed(neZha.MotorList.M2, 0)
                    } else {
                        if (receivedString == "99") {
                            neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S3, 130)
                            basic.pause(500)
                            neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S3, 185)
                        } else {
                            if (receivedString == "100") {
                                neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S3, 50)
                            } else {
                                neZha.setMotorSpeed(neZha.MotorList.M1, 0)
                                neZha.setMotorSpeed(neZha.MotorList.M2, 0)
                            }
                        }
                    }
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (线路 == 1) {
        _111小球路径()
    } else if (线路 == 2) {
        _111高架任务()
    } else if (线路 == 3) {
        _2222高架任务()
    } else if (线路 == 4) {
    	
    }
})
function 黑色方块 () {
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_13))) {
        PlanetX_Basic.Trackbit_get_state_value()
        基础巡线()
    }
    固定25速度前进(350)
    停止(200)
    固定25后退(200)
    停止(200)
}
function 卡片识别 () {
    if (PlanetX_Basic.checkColor(PlanetX_Basic.ColorList.green)) {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J1, true, 100)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, false)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, false)
    } else if (PlanetX_Basic.checkColor(PlanetX_Basic.ColorList.red)) {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, true, 100)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J1, false)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, false)
    } else if (PlanetX_Basic.checkColor(PlanetX_Basic.ColorList.yellow)) {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, true, 100)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J1, false)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, false)
    } else {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J1, false)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, false)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, false)
    }
}
function 左转90度找黑线 () {
    _2左转45度()
    while (!(PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1) || PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_1))) {
        neZha.setMotorSpeed(neZha.MotorList.M1, -25)
        neZha.setMotorSpeed(neZha.MotorList.M2, 25)
    }
}
function 高架2后半段 () {
    基础速度 = 25
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.One, PlanetX_Basic.TrackbitType.State_1) && PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Four, PlanetX_Basic.TrackbitType.State_1))) {
        PlanetX_Basic.Trackbit_get_state_value()
        高级巡线()
    }
    固定25速度前进(150)
    停止(100)
    重置舵机()
    停止(300)
    右转90度找黑线()
    停止(300)
    左右轮差速(25, -25)
    basic.pause(550)
    停止(300)
    while (!(PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1) && PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_1))) {
        左右轮差速(25, -25)
    }
    停止(500)
    基础速度 = 25
    高级巡线延时(600)
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_0))) {
        PlanetX_Basic.Trackbit_get_state_value()
        基础巡线()
    }
    停止(400)
    固定25速度前进(250)
    停止(400)
    左右轮差速(35, -25)
    basic.pause(350)
    停止(300)
    固定25速度前进(400)
    停止(300)
    左右轮差速(25, -25)
    basic.pause(200)
    停止(300)
    固定25速度前进(550)
    停止(300)
    左右轮差速(25, -35)
    basic.pause(550)
    停止(300)
    for (let index = 0; index < 2; index++) {
        左右轮差速(-28, -25)
        basic.pause(400)
        停止(300)
    }
    固定25速度前进(340)
    停止(500)
    夹紧()
    停止(500)
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 335)
    停止(300)
    固定25后退(400)
    停止(300)
    下降开门()
    停止(600)
    while (!(PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1) || PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_1))) {
        左右轮差速(5, 25)
    }
    停止(300)
    固定25速度前进(600)
    停止(200)
    右转90度找黑线()
    停止(200)
    基础速度 = 25
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_5))) {
        PlanetX_Basic.Trackbit_get_state_value()
        高级巡线()
    }
    固定25速度前进(200)
    停止(200)
    右转90度找黑线()
    停止(200)
    高级巡线延时(1500)
    停止(200)
    右转90度找黑线()
    基础速度 = 25
    高级巡线延时(700)
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_0))) {
        PlanetX_Basic.Trackbit_get_state_value()
        基础巡线()
    }
    停止(500)
    左右轮差速(-25, 20)
    basic.pause(450)
    停止(300)
    固定25速度前进(250)
    停止(300)
    顶进去()
}
function _111高架任务 () {
    基础速度 = 90
    重置舵机()
    高级巡线延时(3000)
    停止(300)
    左右轮差速(25, -35)
    basic.pause(500)
    停止(300)
    左转90度找黑线()
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_13))) {
        PlanetX_Basic.Trackbit_get_state_value()
        基础巡线()
    }
    固定25速度前进(150)
    右转90度找黑线()
    基础速度 = 40
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_5))) {
        PlanetX_Basic.Trackbit_get_state_value()
        高级巡线()
    }
    固定25速度前进(300)
    停止(300)
    左右轮差速(-30, 30)
    basic.pause(200)
    停止(200)
    _2左转45度()
    while (!(PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_1))) {
        neZha.setMotorSpeed(neZha.MotorList.M2, 25)
        neZha.setMotorSpeed(neZha.MotorList.M1, -25)
    }
    停止(200)
    基础速度 = 25
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1) && PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Four, PlanetX_Basic.TrackbitType.State_1))) {
        PlanetX_Basic.Trackbit_get_state_value()
        高级巡线()
    }
    高级巡线延时(300)
    停止(400)
    固定25后退(180)
    停止(400)
    左右轮差速(25, -30)
    basic.pause(550)
    停止(500)
    固定25速度前进(200)
    停止(300)
    高架1后半段()
}
function 大右转2 () {
    neZha.setMotorSpeed(neZha.MotorList.M1, 0)
    neZha.setMotorSpeed(neZha.MotorList.M2, -28)
}
function 第二次拿3蓝球 () {
    松开()
    basic.pause(500)
    固定25速度前进(200)
    停止(300)
    左右轮差速(-30, 25)
    basic.pause(500)
    停止(300)
    高级巡线延时(300)
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_0))) {
        PlanetX_Basic.Trackbit_get_state_value()
        高级巡线()
    }
    关灯()
    固定25速度前进(150)
    停止(1000)
}
function 停止 (c: number) {
    neZha.setMotorSpeed(neZha.MotorList.M1, 0)
    neZha.setMotorSpeed(neZha.MotorList.M2, 0)
    basic.pause(c)
}
function _111小球路径 () {
    基础速度 = 60
    重置舵机()
    _2颗红球()
}
function 第一次拿3蓝球 () {
    固定25速度前进(450)
    停止(200)
    左右轮差速(25, -25)
    basic.pause(650)
    停止(200)
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1) && PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_1))) {
        PlanetX_Basic.Trackbit_get_state_value()
        左右轮差速(30, 30)
    }
    固定25速度前进(500)
    停止(200)
    左右轮差速(-35, 25)
    basic.pause(300)
    停止(300)
    while (!(PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1))) {
        左右轮差速(-35, 25)
    }
    basic.pause(50)
    停止(200)
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_0))) {
        PlanetX_Basic.Trackbit_get_state_value()
        基础巡线()
    }
    固定25速度前进(100)
    停止(800)
}
function 抬升 () {
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 320)
}
function _2颗红球 () {
    PlanetX_Basic.Trackbit_get_state_value()
    高级巡线延时(2500)
    停止(300)
    左右轮差速(-15, 35)
    basic.pause(700)
    停止(500)
    左右轮差速(15, -35)
    basic.pause(400)
    while (!(PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1) || PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_1))) {
        PlanetX_Basic.Trackbit_get_state_value()
        左右轮差速(15, -35)
    }
    停止(200)
}
function 夹紧 () {
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S2, 330)
}
// 前进左轮M1，右轮M2
let 计时器 = 0
let 基础速度 = 0
let 线路 = 0
basic.showNumber(0)
radio.setGroup(110)
线路 = 1
basic.showNumber(线路)
neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S3, 50)
重置舵机()
关灯()
