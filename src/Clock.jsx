/**
 * Clock 컴포넌트
 *
 * 실시간 시계를 표시하고 사용자가 시계를 시작하거나 정지할 수 있는 React 함수형 컴포넌트입니다.
 * 시간은 "시", "분", "초"로 나뉘어 표시됩니다.
 *
 * 주요 기능:
 * - 현재 시간을 "HH:mm:ss" 형식으로 표시합니다.
 * - 시계가 실행 중일 때 매초마다 시간을 업데이트합니다.
 **/

// 실제 시계처럼 디자인
// 시침, 분침, 초침을 만들고 deg로 제어
// 각 침들이 속도가 빠르기 때문에 transition은 짧게 제어

import { useState, useEffect } from 'react';
import './Clock.css';

function Clock() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDeg = (hours + minutes / 60) * 30;
  const minuteDeg = (minutes + seconds / 60) * 6;
  const secondDeg = seconds * 6;

  return (
    <>
      <div className="container">
        <div className="clock">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="dots"
                  style={{
                    transform: `rotate(${i * 30}deg) translate(0, 1rem)`,
                  }}
                ></div>
              ))}
              <div id='cenDot'></div>
              <div id="hour" style={{ transform: `rotate(${hourDeg}deg)` }}></div>
              <div id="min" style={{ transform: `rotate(${minuteDeg}deg)` }}></div>
              <div id="sec" style={{ transform: `rotate(${secondDeg}deg)` }}></div>
        </div>
      </div>
    </>
  );
}

export default Clock;
