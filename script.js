var startQuestionAnswered = false;
var questionCount = 0; // Đếm số câu hỏi đã được trả lời

function startQuiz() {
    var greetingQuestionElement = document.getElementById('question');
    var greetingYesButton = document.getElementById('greetingYesBtn');
    var greetingNoButton = document.getElementById('greetingNoBtn');

    greetingQuestionElement.innerHTML = "Xin chào cậu!";
    greetingYesButton.innerHTML = "Xin chào cậu.";
    greetingNoButton.innerHTML = "Không chào!";

    greetingYesButton.onclick = function () {
        alert("Xin chào cậu!");
        startQuestionAnswered = true;
        questionCount++;
        changeNextQuestion();
    };

    greetingNoButton.onclick = function () {
        alert("Bạn choảnh gì gọ?");
        startQuestionAnswered = true;
        questionCount++;
        changeNextQuestion();
    };
}

function showMessage(message) {
    if (message === 'OK' && startQuestionAnswered) {
        alert("Cảm ơn cậu rất nhiều 🤗!");
        questionCount++;
        changeNextQuestion();
    } else if (message === 'NO' && startQuestionAnswered) {
        alert("Đi mà cậu <icon năn nỉ>");
        questionCount++;
        changeNextQuestion();
    } else if (message === 'Hello') {
        alert("Tớ biết cậu sẽ thành thật mà!");
        questionCount++;
        changeNextQuestion();
    } else if (message === 'NotHello') {
        alert("Are u sure :)?");
    }    else if (message === 'Deny') {
        alert("Kệ cậu tớ vẫn hỏi");
        changeNextQuestion();
    }else if (message === 'Allow') {
        alert("Cảm ơn bạn nhiều <3");
        questionCount++;
        changeNextQuestion();
    } else if (message === 'Sure') {
        alert("Oke bạn tui, cậu hãy ib lại cho người mà cậu biết là ai vì website này không thông báo cho tớ câu trả lời của cậu :))))))");
        displayThankYouMessage();
    } else if (message === 'NotSure') {
        alert("Không được sao cậu :((((???");
        alert("Năn nỉ lun đóe");
        alert("pls :((((((((((((");
        alert("Để chắc chắn bản thân không bị từ chối thì tớ sẽ xóa chức năng của nút không luôn :))))))))");
        // Xử lý logic tiếp theo sau khi hiển thị thông báo "Không được sao cậu :((((???"
    }
}

function changeNextQuestion() {
    var questionElement = document.getElementById('question');
    var greetingYesButton = document.getElementById('greetingYesBtn');
    var greetingNoButton = document.getElementById('greetingNoBtn');

    switch (questionCount) {
        case 1:
            questionElement.innerHTML = "Cậu có phải bạn Thùy Linh a5 đúng hơm?";
            greetingYesButton.innerHTML = "Đúng vậy :)";
            greetingNoButton.innerHTML = "Hong phải";
            greetingYesButton.onclick = function () {
                showMessage('Hello');
            };
            greetingNoButton.onclick = function () {
                showMessage('NotHello');
            };
            break;

        case 2:
            if (startQuestionAnswered) {
                alert("Tớ biết cậu sẽ thành thật mà!");
            } else {
                alert("Are u sure :)?");
            }
            break;

        case 3:
            questionElement.innerHTML = "Tớ là bạn A ẩn danh, tớ dùng cái này để muốn hỏi cậu một câu hỏi :))))))";
            greetingYesButton.innerHTML = "Cho phép";
            greetingNoButton.innerHTML = "Dell cho";
            greetingYesButton.onclick = function () {
                showMessage('Allow');
            };
            greetingNoButton.onclick = function () {
                showMessage('Deny');
            };
            break;

        case 4:
            if (startQuestionAnswered) {
                alert("Cảm ơn bạn nhiều <3");
            } else {
                alert("Kệ cậu tớ vẫn hỏi");
            }
            break;

        case 5:
            questionElement.innerHTML = "Không biết chiều thứ 2 sang tuần cậu có rảnh không? \n Tớ muốn mời cậu đi ăn bánh uống trà(sữa) một tí. \n Không biết cậu có thể đi cùng được không!";
            greetingYesButton.innerHTML = "Chắc cũng đi được";
            greetingNoButton.innerHTML = "Không/không chắc";
            greetingYesButton.onclick = function () {
                showMessage('Sure');
            };
            greetingNoButton.onclick = function () {
                showMessage('NotSure');
                greetingNoButton.disabled = true;
                changeNextQuestion();
            };
            break;

        // Các case khác giữ nguyên
    }

    questionCount++;
}

function displayThankYouMessage() {
    var questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = "<p>Cảm ơn cậu nhìu</p>";
}



// Bắt đầu câu hỏi đầu tiên khi trang web được tải
startQuiz();
